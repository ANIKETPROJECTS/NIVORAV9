import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  fetchEnquiries, updateEnquiry, deleteEnquiry, downloadEnquiriesExcel,
  clearExcelToken, Enquiry,
} from '../../lib/api'
import { LogOut, RefreshCw, Download, Pencil, Trash2, Loader2, X, Check, SlidersHorizontal } from 'lucide-react'

const EDITABLE_FIELDS: { key: keyof Enquiry; label: string; type: 'text' | 'textarea' }[] = [
  { key: 'fullName', label: 'Full Name', type: 'text' },
  { key: 'phone', label: 'Phone Number', type: 'text' },
  { key: 'email', label: 'Email Address', type: 'text' },
  { key: 'spaceType', label: 'Type of Space', type: 'text' },
  { key: 'location', label: 'Project Location', type: 'text' },
  { key: 'projectType', label: 'Project Type', type: 'text' },
  { key: 'budget', label: 'Estimated Budget', type: 'text' },
  { key: 'referral', label: 'How Did You Hear About Us', type: 'text' },
  { key: 'requirements', label: 'Brief Requirements', type: 'textarea' },
  { key: 'notes', label: 'Notes', type: 'textarea' },
]

function localDateString(date = new Date()) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

function formatSelectedDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString(undefined, {
    day: 'numeric', month: 'short', year: 'numeric',
  })
}

function localMonthString(date = new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`
}

function monthRange(month: string) {
  if (!/^\d{4}-\d{2}$/.test(month)) return null
  const [year, monthNumber] = month.split('-').map(Number)
  if (monthNumber < 1 || monthNumber > 12) return null
  const start = new Date(year, monthNumber - 1, 1)
  const end = new Date(year, monthNumber, 0)
  return { startDate: localDateString(start), endDate: localDateString(end) }
}

function previousMonthRange() {
  const now = new Date()
  return monthRange(localMonthString(new Date(now.getFullYear(), now.getMonth() - 1, 1)))!
}

type FilterKind = 'day' | 'lastMonth' | 'month' | 'custom'
type EnquiryFilter = {
  kind: FilterKind
  startDate: string
  endDate: string
}

export default function ExcelDashboard() {
  const navigate = useNavigate()
  const today = localDateString()
  const [enquiries, setEnquiries] = useState<Enquiry[]>([])
  const [selectedDate, setSelectedDate] = useState(today)
  const [activeFilter, setActiveFilter] = useState<EnquiryFilter>({
    kind: 'day', startDate: today, endDate: today,
  })
  const [filterMenuOpen, setFilterMenuOpen] = useState(false)
  const [pendingFilterKind, setPendingFilterKind] = useState<FilterKind>('lastMonth')
  const [monthDraft, setMonthDraft] = useState(localMonthString())
  const [customStartDate, setCustomStartDate] = useState(today)
  const [customEndDate, setCustomEndDate] = useState(today)
  const filterPopoverRef = useRef<HTMLDivElement>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [successMsg, setSuccessMsg] = useState('')
  const [editing, setEditing] = useState<Enquiry | null>(null)
  const [editForm, setEditForm] = useState<Partial<Enquiry>>({})
  const [saving, setSaving] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null)
  const [deletingId, setDeletingId] = useState<string | null>(null)
  const [downloading, setDownloading] = useState(false)

  const flash = (msg: string) => { setSuccessMsg(msg); setTimeout(() => setSuccessMsg(''), 3000) }

  const load = async (range = { startDate: activeFilter.startDate, endDate: activeFilter.endDate }) => {
    setLoading(true); setError('')
    setEnquiries([])
    try { setEnquiries(await fetchEnquiries(range.startDate, range.endDate)) }
    catch (e: unknown) { setError((e as Error).message || 'Failed to fetch enquiries') }
    finally { setLoading(false) }
  }

  useEffect(() => {
    load({ startDate: activeFilter.startDate, endDate: activeFilter.endDate })
  }, [activeFilter.startDate, activeFilter.endDate])

  useEffect(() => {
    if (!filterMenuOpen) return
    const handlePointerDown = (event: PointerEvent) => {
      if (filterPopoverRef.current && !filterPopoverRef.current.contains(event.target as Node)) {
        setFilterMenuOpen(false)
      }
    }
    document.addEventListener('pointerdown', handlePointerDown)
    return () => document.removeEventListener('pointerdown', handlePointerDown)
  }, [filterMenuOpen])

  const handleLogout = () => { clearExcelToken(); navigate('/excelsheet') }

  const openEdit = (enquiry: Enquiry) => {
    setEditing(enquiry)
    setEditForm({ ...enquiry })
  }

  const handleSave = async () => {
    if (!editing) return
    setSaving(true)
    try {
      await updateEnquiry(editing._id, editForm)
      await load()
      setEditing(null)
      flash('Record updated.')
    } catch (e: unknown) {
      setError((e as Error).message)
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async (id: string) => {
    setDeletingId(id)
    try { await deleteEnquiry(id); await load(); flash('Record deleted.') }
    catch (e: unknown) { setError((e as Error).message) }
    finally { setDeletingId(null); setConfirmDelete(null) }
  }

  const handleDownload = async () => {
    setDownloading(true)
    try { await downloadEnquiriesExcel(activeFilter.startDate, activeFilter.endDate) }
    catch (e: unknown) { setError((e as Error).message) }
    finally { setDownloading(false) }
  }

  const applyDay = (date: string) => {
    if (!date) return
    setSelectedDate(date)
    setActiveFilter({ kind: 'day', startDate: date, endDate: date })
    setFilterMenuOpen(false)
  }

  const setRelativeDate = (days: number) => {
    const date = new Date()
    date.setDate(date.getDate() + days)
    applyDay(localDateString(date))
  }

  const applyFilterSelection = () => {
    if (pendingFilterKind === 'lastMonth') {
      const range = previousMonthRange()
      setActiveFilter({ kind: 'lastMonth', ...range })
      setFilterMenuOpen(false)
      return
    }

    if (pendingFilterKind === 'month') {
      const range = monthRange(monthDraft)
      if (!range) {
        setError('Please select a valid month.')
        return
      }
      setActiveFilter({ kind: 'month', ...range })
      setFilterMenuOpen(false)
      return
    }

    if (!customStartDate || !customEndDate || customStartDate > customEndDate) {
      setError('Choose a valid start and end date.')
      return
    }
    setActiveFilter({ kind: 'custom', startDate: customStartDate, endDate: customEndDate })
    setFilterMenuOpen(false)
  }

  const openFilterMenu = () => {
    setPendingFilterKind(activeFilter.kind === 'day' ? 'lastMonth' : activeFilter.kind)
    setFilterMenuOpen(open => !open)
  }

  const selectLastMonth = () => {
    setPendingFilterKind('lastMonth')
  }

  const selectMonth = () => {
    setPendingFilterKind('month')
  }

  const selectCustomRange = () => {
    setPendingFilterKind('custom')
  }

  const dateLabel = activeFilter.kind === 'day'
    ? activeFilter.startDate === localDateString()
      ? `Today, ${formatSelectedDate(activeFilter.startDate)}`
      : activeFilter.startDate === localDateString(new Date(Date.now() - 24 * 60 * 60 * 1000))
        ? `Yesterday, ${formatSelectedDate(activeFilter.startDate)}`
        : formatSelectedDate(activeFilter.startDate)
    : activeFilter.kind === 'lastMonth'
      ? `Last month, ${formatSelectedDate(activeFilter.startDate)} – ${formatSelectedDate(activeFilter.endDate)}`
      : activeFilter.kind === 'month'
        ? `Selected month, ${formatSelectedDate(activeFilter.startDate)} – ${formatSelectedDate(activeFilter.endDate)}`
        : `Custom range, ${formatSelectedDate(activeFilter.startDate)} – ${formatSelectedDate(activeFilter.endDate)}`
  const canApplySelection = pendingFilterKind === 'lastMonth'
    || (pendingFilterKind === 'month' && Boolean(monthRange(monthDraft)))
    || (pendingFilterKind === 'custom' && Boolean(customStartDate && customEndDate && customStartDate <= customEndDate))

  return (
    <div className="exc-root">
      <aside className="exc-sidebar">
        <div className="exc-sidebar-brand">
          <span className="exc-brand-name">nivora</span>
          <span className="exc-brand-sub">enquiry records</span>
        </div>
        <div className="exc-sidebar-footer">
          <button className="exc-logout" onClick={handleLogout}>
            <LogOut size={15} /> Sign Out
          </button>
        </div>
      </aside>

      <main className="exc-main">
        <header className="exc-topbar">
          <div className="exc-topbar-left">
            <div>
              <h1 className="exc-page-title">Contact Form Records</h1>
            </div>
            <span className="exc-count">{enquiries.length} {enquiries.length === 1 ? 'entry' : 'entries'}</span>
          </div>
          <div className="exc-topbar-right">
            <div className="exc-date-controls">
              <button type="button" className="exc-date-shortcut" onClick={() => setRelativeDate(0)}>Today</button>
              <button type="button" className="exc-date-shortcut" onClick={() => setRelativeDate(-1)}>Yesterday</button>
              <div className="exc-filter-control" ref={filterPopoverRef}>
                <button
                  type="button"
                  className={`exc-filter-button ${activeFilter.kind !== 'day' ? 'is-active' : ''}`}
                  onClick={openFilterMenu}
                  aria-label="Open enquiry filters"
                  aria-expanded={filterMenuOpen}
                  aria-haspopup="dialog"
                  title="More date filters"
                >
                  <SlidersHorizontal size={15} />
                </button>
                {filterMenuOpen && (
                  <div className="exc-filter-popover" role="dialog" aria-label="Enquiry date filters">
                    <div className="exc-filter-popover-header">
                      <strong>Filter Enquiries</strong>
                      <button type="button" className="exc-filter-close" onClick={() => setFilterMenuOpen(false)} aria-label="Close filters">
                        <X size={14} />
                      </button>
                    </div>

                    <div className="exc-filter-options" role="radiogroup" aria-label="Date filter type">
                      <button
                        type="button"
                        role="radio"
                        aria-checked={pendingFilterKind === 'lastMonth'}
                        className={`exc-filter-radio ${pendingFilterKind === 'lastMonth' ? 'is-selected' : ''}`}
                        onClick={selectLastMonth}
                      >
                        <span className="exc-filter-radio-mark" aria-hidden="true" />
                        <span className="exc-filter-radio-copy">
                          <strong>Last Month</strong>
                          <small>{formatSelectedDate(previousMonthRange().startDate)} – {formatSelectedDate(previousMonthRange().endDate)}</small>
                        </span>
                      </button>
                      <button
                        type="button"
                        role="radio"
                        aria-checked={pendingFilterKind === 'month'}
                        className={`exc-filter-radio ${pendingFilterKind === 'month' ? 'is-selected' : ''}`}
                        onClick={selectMonth}
                      >
                        <span className="exc-filter-radio-mark" aria-hidden="true" />
                        <span className="exc-filter-radio-copy"><strong>Select Month</strong></span>
                      </button>
                      <button
                        type="button"
                        role="radio"
                        aria-checked={pendingFilterKind === 'custom'}
                        className={`exc-filter-radio ${pendingFilterKind === 'custom' ? 'is-selected' : ''}`}
                        onClick={selectCustomRange}
                      >
                        <span className="exc-filter-radio-mark" aria-hidden="true" />
                        <span className="exc-filter-radio-copy"><strong>Custom Range</strong></span>
                      </button>
                    </div>

                    <div className="exc-filter-selection">
                      {pendingFilterKind === 'lastMonth' && (
                        <p className="exc-filter-last-month-note">
                          Enquiries from {formatSelectedDate(previousMonthRange().startDate)} to {formatSelectedDate(previousMonthRange().endDate)}
                        </p>
                      )}

                      {pendingFilterKind === 'month' && (
                        <label className="exc-filter-field">
                          <span>Month</span>
                          <input
                            type="month"
                            value={monthDraft}
                            max={localMonthString()}
                            onChange={e => setMonthDraft(e.target.value)}
                          />
                        </label>
                      )}

                      {pendingFilterKind === 'custom' && (
                        <div className="exc-filter-range-fields">
                          <label className="exc-filter-field">
                            <span>Start Date</span>
                            <input
                              type="date"
                              value={customStartDate}
                              max={customEndDate || localDateString()}
                              onChange={e => setCustomStartDate(e.target.value)}
                            />
                          </label>
                          <label className="exc-filter-field">
                            <span>End Date</span>
                            <input
                              type="date"
                              value={customEndDate}
                              min={customStartDate}
                              max={localDateString()}
                              onChange={e => setCustomEndDate(e.target.value)}
                            />
                          </label>
                        </div>
                      )}
                    </div>

                    <button
                      type="button"
                      className="exc-filter-submit"
                      onClick={applyFilterSelection}
                      disabled={!canApplySelection}
                    >
                      <Check size={14} /> Apply
                    </button>
                  </div>
                )}
              </div>
              <label className="exc-date-picker">
                <span>Date</span>
                <input
                  type="date"
                  value={selectedDate}
                  max={localDateString()}
                   onChange={e => e.target.value && applyDay(e.target.value)}
                  aria-label="Select enquiry date"
                />
              </label>
            </div>
            <button type="button" className="exc-btn-ghost-sm" onClick={() => load()} title="Refresh"><RefreshCw size={15} /></button>
            <button type="button" className="exc-btn-add" onClick={handleDownload} disabled={downloading || enquiries.length === 0}>
              {downloading ? <Loader2 size={16} className="exc-spin" /> : <Download size={16} />} Download Excel
            </button>
          </div>
        </header>

        {successMsg && <div className="exc-success">{successMsg}</div>}
        {error && (
          <div className="exc-error">
            {error}
            <button onClick={() => setError('')}>×</button>
          </div>
        )}

        <div className="exc-content">
          <section className="exc-range-summary" aria-label="Active enquiry date range" aria-live="polite">
            <span>Showing enquiries for:</span>
            <strong>{dateLabel}</strong>
          </section>
          {loading ? (
            <div className="exc-loading"><Loader2 size={28} className="exc-spin" /> Loading records…</div>
          ) : enquiries.length === 0 ? (
            <div className="exc-empty" role="status" aria-live="polite">
              <p className="exc-empty-desktop">No enquiries found</p>
              <p className="exc-empty-mobile">No enquiries found for this date</p>
            </div>
          ) : (
            <>
              <div className="exc-table-wrap">
                <table className="exc-table">
                <thead>
                  <tr>
                    <th>Submitted</th>
                    <th>Full Name</th><th>Phone</th><th>Email</th>
                    <th>Space Type</th><th>Location</th><th>Project Type</th>
                    <th>Budget</th><th>Email Sent</th>
                    <th style={{ textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {enquiries.map(e => (
                    <tr key={e._id}>
                      <td className="exc-cell-muted">{new Date(e.createdAt).toLocaleString()}</td>
                      <td className="exc-name">{e.fullName}</td>
                      <td className="exc-cell-muted">{e.phone}</td>
                      <td className="exc-cell-muted">{e.email}</td>
                      <td className="exc-cell-muted">{e.spaceType || '—'}</td>
                      <td className="exc-cell-muted">{e.location || '—'}</td>
                      <td className="exc-cell-muted">{e.projectType || '—'}</td>
                      <td className="exc-cell-muted">{e.budget || '—'}</td>
                      <td>
                        <span className={`exc-badge ${e.emailSent ? 'exc-badge-yes' : 'exc-badge-no'}`}>
                          {e.emailSent ? 'Yes' : 'No'}
                        </span>
                      </td>
                      <td>
                        <div className="exc-actions">
                          <button className="exc-action-btn" onClick={() => openEdit(e)} title="Edit">
                            <Pencil size={14} />
                          </button>
                          {confirmDelete === e._id ? (
                            <div className="exc-confirm">
                              <span>Delete?</span>
                              <button className="exc-confirm-yes" onClick={() => handleDelete(e._id)} disabled={deletingId === e._id}>
                                {deletingId === e._id ? <Loader2 size={12} className="exc-spin" /> : <Check size={12} />}
                              </button>
                              <button className="exc-confirm-no" onClick={() => setConfirmDelete(null)}><X size={12} /></button>
                            </div>
                          ) : (
                            <button className="exc-action-btn exc-action-del" onClick={() => setConfirmDelete(e._id)} title="Delete">
                              <Trash2 size={14} />
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
                </table>
              </div>
              <div className="exc-cards">
              {enquiries.map(e => (
                <article className="exc-card" key={e._id}>
                  <div className="exc-card-header">
                    <h2 className="exc-card-name">{e.fullName}</h2>
                    <div className="exc-card-submitted">
                      <span>Submitted</span>
                      <time dateTime={e.createdAt}>{new Date(e.createdAt).toLocaleString()}</time>
                    </div>
                  </div>

                  <div className="exc-card-fields">
                    <div className="exc-card-field exc-card-field-full">
                      <span className="exc-card-label">Phone Number</span>
                      <span className="exc-card-value">{e.phone || '—'}</span>
                    </div>
                    <div className="exc-card-field exc-card-field-full">
                      <span className="exc-card-label">Email</span>
                      <span className="exc-card-value">{e.email || '—'}</span>
                    </div>
                    <div className="exc-card-field exc-card-status-field">
                      <span className="exc-card-label">Space Type</span>
                      <span className="exc-card-value">{e.spaceType || '—'}</span>
                    </div>
                    <div className="exc-card-field">
                      <span className="exc-card-label">Location</span>
                      <span className="exc-card-value">{e.location || '—'}</span>
                    </div>
                    <div className="exc-card-field">
                      <span className="exc-card-label">Project Type</span>
                      <span className="exc-card-value">{e.projectType || '—'}</span>
                    </div>
                    <div className="exc-card-field">
                      <span className="exc-card-label">Budget</span>
                      <span className="exc-card-value">{e.budget || '—'}</span>
                    </div>
                    <div className="exc-card-field">
                      <span className="exc-card-label">Email Sent</span>
                      <span className={`exc-badge ${e.emailSent ? 'exc-badge-yes' : 'exc-badge-no'}`}>
                        {e.emailSent ? 'Yes' : 'No'}
                      </span>
                    </div>
                  </div>

                  <div className="exc-card-actions">
                    <div className="exc-actions">
                      <button className="exc-action-btn" onClick={() => openEdit(e)} title="Edit">
                        <Pencil size={14} /> <span>Edit</span>
                      </button>
                      {confirmDelete === e._id ? (
                        <div className="exc-confirm">
                          <span>Delete?</span>
                          <button className="exc-confirm-yes" onClick={() => handleDelete(e._id)} disabled={deletingId === e._id}>
                            {deletingId === e._id ? <Loader2 size={12} className="exc-spin" /> : <Check size={12} />}
                            <span>Yes</span>
                          </button>
                          <button className="exc-confirm-no" onClick={() => setConfirmDelete(null)}>
                            <X size={12} /> <span>No</span>
                          </button>
                        </div>
                      ) : (
                        <button className="exc-action-btn exc-action-del" onClick={() => setConfirmDelete(e._id)} title="Delete">
                          <Trash2 size={14} /> <span>Delete</span>
                        </button>
                      )}
                    </div>
                  </div>
                </article>
              ))}
              </div>
            </>
          )}
        </div>
      </main>

      {/* Edit modal */}
      {editing && (
        <div className="exc-modal-overlay" onClick={() => !saving && setEditing(null)}>
          <div className="exc-modal" onClick={e => e.stopPropagation()}>
            <div className="exc-modal-header">
              <h2>Edit Record</h2>
              <button className="exc-modal-close" onClick={() => !saving && setEditing(null)}><X size={18} /></button>
            </div>
            <div className="exc-modal-body">
              {EDITABLE_FIELDS.map(f => (
                <div key={f.key} className="exc-field">
                  <label>{f.label}</label>
                  {f.type === 'textarea' ? (
                    <textarea
                      value={(editForm[f.key] as string) || ''}
                      onChange={e => setEditForm(prev => ({ ...prev, [f.key]: e.target.value }))}
                    />
                  ) : (
                    <input
                      type="text"
                      value={(editForm[f.key] as string) || ''}
                      onChange={e => setEditForm(prev => ({ ...prev, [f.key]: e.target.value }))}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="exc-modal-footer">
              <button className="exc-btn-ghost" onClick={() => setEditing(null)} disabled={saving}>Cancel</button>
              <button className="exc-btn-add" onClick={handleSave} disabled={saving}>
                {saving ? <Loader2 size={16} className="exc-spin" /> : null} Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        * { box-sizing: border-box; }
        .exc-root { min-height: 100vh; display: flex; background: #f0ebe3; font-family: Arial, sans-serif; }
        .exc-sidebar {
          width: 230px; min-height: 100vh; flex-shrink: 0;
          background: #ffffff; border-right: 1px solid #e2d9ce;
          display: flex; flex-direction: column;
          position: sticky; top: 0; height: 100vh;
        }
        .exc-sidebar-brand { padding: 28px 24px 20px; border-bottom: 1px solid #ede8e1; }
        .exc-brand-name { display: block; font-size: 24px; color: #7a6245; font-family: Georgia, serif; font-style: italic; letter-spacing: 0.1em; }
        .exc-brand-sub { display: block; font-size: 9px; letter-spacing: 0.25em; color: #c0b5a8; text-transform: uppercase; margin-top: 2px; }
        .exc-sidebar-footer { margin-top: auto; padding: 20px 24px; border-top: 1px solid #ede8e1; }
        .exc-logout { display: flex; align-items: center; gap: 8px; background: none; border: none; color: #9a8e82; cursor: pointer; font-size: 13px; padding: 0; transition: color 0.2s; }
        .exc-logout:hover { color: #b85a4a; }
        .exc-main { flex: 1; display: flex; flex-direction: column; min-width: 0; }
        .exc-topbar {
          display: flex; align-items: center; justify-content: space-between;
          padding: 20px 32px; border-bottom: 1px solid #e2d9ce;
          background: #ffffff; position: sticky; top: 0; z-index: 10;
          box-shadow: 0 1px 0 #e2d9ce;
        }
        .exc-topbar-left { display: flex; align-items: baseline; gap: 12px; }
         .exc-topbar-left > div { display: flex; flex-direction: column; gap: 4px; }
        .exc-page-title { margin: 0; font-size: 18px; color: #1a1612; font-weight: normal; letter-spacing: 0.03em; }
        .exc-count { font-size: 12px; color: #c0b5a8; }
         .exc-topbar-right { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; justify-content: flex-end; }
         .exc-date-controls { display: flex; align-items: center; gap: 6px; }
          .exc-date-shortcut {
           background: #faf8f5; border: 1px solid #ddd7ce; color: #7a6245;
            border-radius: 4px; padding: 8px 10px; cursor: pointer; font-size: 13px;
            font-weight: 500;
         }
         .exc-date-shortcut:hover { border-color: #7a6245; background: #f4eee6; }
         .exc-date-picker {
           display: flex; align-items: center; gap: 7px; border: 1px solid #ddd7ce;
           border-radius: 4px; padding: 5px 8px; background: #fff; color: #9a8e82;
            font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em;
         }
          .exc-date-picker input { border: none; outline: none; color: #2a2218; font: 13px Arial, sans-serif; cursor: pointer; }
          .exc-range-summary {
             display: block; position: relative; clear: both; width: 100%;
             margin: 24px 0 28px; padding: 0 0 16px; border-bottom: 1px solid #e2d9ce;
             color: #9a8e82; font-size: 13px; line-height: 1.5;
         }
           .exc-range-summary span, .exc-range-summary strong { display: inline; }
           .exc-range-summary strong { color: #6b5d4f; font-weight: 600; }
         .exc-filter-control { position: relative; flex: 0 0 auto; }
         .exc-filter-button {
           min-width: 34px; min-height: 32px; padding: 7px 8px;
           display: inline-flex; align-items: center; justify-content: center;
           background: #faf8f5; border: 1px solid #ddd7ce; border-radius: 4px;
           color: #7a6245; cursor: pointer; pointer-events: auto; touch-action: manipulation;
         }
         .exc-filter-button:hover, .exc-filter-button.is-active {
           border-color: #7a6245; background: #f4eee6;
         }
         .exc-filter-popover {
           position: absolute; top: calc(100% + 8px); left: 0; z-index: 30;
           width: 292px; max-width: calc(100vw - 32px); padding: 14px;
           background: #fff; border: 1px solid #e2d9ce; border-radius: 8px;
           box-shadow: 0 12px 30px rgba(75, 58, 42, 0.16);
             color: #2a2218; font-family: Arial, sans-serif; font-size: 13px; pointer-events: auto;
         }
         .exc-filter-popover-header {
           display: flex; align-items: center; justify-content: space-between;
           padding-bottom: 10px; border-bottom: 1px solid #ede8e1;
         }
           .exc-filter-popover-header strong {
             color: #1a1612; font-size: 18px; font-weight: 700;
             letter-spacing: 0; text-transform: none;
          }
         .exc-filter-close {
           display: inline-flex; align-items: center; justify-content: center;
           width: 30px; height: 30px; padding: 0; border: 1px solid #ddd7ce;
           border-radius: 4px; background: #fff; color: #9a8e82; cursor: pointer;
         }
         .exc-filter-close:hover { color: #7a6245; border-color: #7a6245; }
          .exc-filter-options { display: flex; flex-direction: column; gap: 4px; margin-top: 12px; }
          .exc-filter-radio {
            width: 100%; min-height: 38px; padding: 8px; display: flex; align-items: flex-start;
            gap: 9px; border: 1px solid transparent; border-radius: 5px;
            background: transparent; color: #2a2218; text-align: left; cursor: pointer;
          }
          .exc-filter-radio:hover { background: #faf8f5; }
          .exc-filter-radio.is-selected { border-color: #cdbda9; background: #faf8f5; color: #7a6245; }
          .exc-filter-radio-mark {
            width: 15px; height: 15px; flex: 0 0 15px; margin-top: 1px;
            border: 1px solid #b7aa9c; border-radius: 50%; background: #fff;
            display: inline-flex; align-items: center; justify-content: center;
          }
          .exc-filter-radio.is-selected .exc-filter-radio-mark { border-color: #7a6245; }
          .exc-filter-radio.is-selected .exc-filter-radio-mark::after {
            content: ""; width: 7px; height: 7px; border-radius: 50%; background: #7a6245;
          }
          .exc-filter-radio-copy { display: flex; flex-direction: column; gap: 4px; min-width: 0; }
           .exc-filter-radio-copy strong { font-size: 13px; font-weight: 600; letter-spacing: 0; }
           .exc-filter-radio-copy small { color: #9a8e82; font-size: 12px; line-height: 1.35; }
          .exc-filter-selection {
            margin-top: 10px; padding: 12px; border: 1px solid #e2d9ce;
            border-radius: 5px; background: #fff;
          }
           .exc-filter-last-month-note { margin: 0; color: #9a8e82; font-size: 12px; line-height: 1.5; }
         .exc-filter-field { display: flex; flex: 1; flex-direction: column; gap: 5px; min-width: 0; }
         .exc-filter-field > span {
             color: #9a8e82; font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase;
         }
         .exc-filter-field input {
           width: 100%; min-width: 0; min-height: 34px; padding: 7px 8px;
           border: 1px solid #ddd7ce; border-radius: 4px; background: #fff;
             color: #2a2218; font: 13px Arial, sans-serif; outline: none;
         }
         .exc-filter-field input:focus { border-color: #7a6245; }
         .exc-filter-range-fields { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; width: 100%; }
          .exc-filter-submit {
            width: 100%; min-height: 38px; margin-top: 14px; padding: 8px 12px;
            display: inline-flex; align-items: center; justify-content: center; gap: 6px;
            border: 1px solid #7a6245; border-radius: 4px; background: #7a6245;
             color: #fff; cursor: pointer; font-size: 13px; font-weight: 600;
            letter-spacing: 0.08em; text-transform: uppercase;
          }
          .exc-filter-submit:hover:not(:disabled) { background: #6a5438; }
          .exc-filter-submit:disabled { opacity: 0.45; cursor: default; }
        .exc-btn-ghost-sm {
          background: none; border: 1px solid #ddd7ce; color: #9a8e82;
          border-radius: 4px; padding: 7px 9px; cursor: pointer;
          display: flex; align-items: center; transition: all 0.2s;
        }
        .exc-btn-ghost-sm:hover { border-color: #7a6245; color: #7a6245; }
        .exc-btn-ghost {
          background: none; border: 1px solid #ddd7ce; color: #6b5d4f;
          border-radius: 4px; padding: 9px 18px; font-size: 13px; cursor: pointer;
        }
        .exc-btn-ghost:hover { border-color: #7a6245; color: #7a6245; }
        .exc-btn-add {
          display: flex; align-items: center; gap: 8px;
          background: #7a6245; color: #ffffff; border: none;
          border-radius: 4px; padding: 9px 18px; font-size: 13px;
          letter-spacing: 0.04em; cursor: pointer; font-weight: 600;
          transition: background 0.2s;
        }
        .exc-btn-add:hover:not(:disabled) { background: #6a5438; }
        .exc-btn-add:disabled { opacity: 0.5; cursor: default; }
        .exc-success {
          margin: 16px 32px 0; background: #f0f7f0; border: 1px solid #b5d9b5;
          color: #3a7a3a; border-radius: 4px; padding: 10px 16px; font-size: 13px;
        }
        .exc-error {
          margin: 16px 32px 0; background: #fdf0ee; border: 1px solid #e8b5ad;
          color: #b85a4a; border-radius: 4px; padding: 10px 16px; font-size: 13px;
          display: flex; justify-content: space-between; align-items: center;
        }
        .exc-error button { background: none; border: none; color: #b85a4a; cursor: pointer; font-size: 18px; }
        .exc-content {
          display: block; position: relative; z-index: 0;
          padding: 28px 32px; flex: 1;
        }
        .exc-loading, .exc-empty {
          display: flex; align-items: center; justify-content: center;
          flex-direction: column; gap: 16px; color: #b0a498;
          font-size: 14px; padding: 80px 0;
        }
         .exc-empty-mobile { display: none; }
        .exc-spin { animation: spin 1s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
        .exc-table-wrap { overflow-x: auto; border-radius: 6px; border: 1px solid #e2d9ce; background: #fff; }
        .exc-table { width: 100%; border-collapse: collapse; }
        .exc-table thead tr { background: #faf8f5; }
        .exc-table th {
          padding: 12px 16px; font-size: 10px; letter-spacing: 0.15em;
          text-transform: uppercase; color: #b0a498; font-weight: 600;
          text-align: left; border-bottom: 1px solid #ede8e1; white-space: nowrap;
        }
        .exc-table td {
          padding: 14px 16px; font-size: 13px; color: #2a2218;
          border-bottom: 1px solid #f0ebe3; vertical-align: middle; white-space: nowrap;
        }
        .exc-table tbody tr:last-child td { border-bottom: none; }
        .exc-table tbody tr:hover td { background: #faf8f5; }
         .exc-cards { display: none; }
        .exc-name { color: #1a1612; font-size: 14px; font-weight: 500; }
        .exc-cell-muted { color: #9a8e82; }
        .exc-badge { display: inline-block; padding: 3px 10px; border-radius: 20px; font-size: 11px; font-weight: 500; }
        .exc-badge-yes { background: #eaf4ea; color: #3a7a3a; }
        .exc-badge-no { background: #fdf0ee; color: #b85a4a; }
        .exc-actions { display: flex; align-items: center; justify-content: flex-end; gap: 8px; }
        .exc-action-btn {
          background: none; border: 1px solid #ddd7ce; color: #9a8e82;
          border-radius: 4px; padding: 6px 8px; cursor: pointer;
          display: flex; align-items: center; transition: all 0.2s;
        }
        .exc-action-btn:hover { border-color: #7a6245; color: #7a6245; }
        .exc-action-del:hover { border-color: #b85a4a; color: #b85a4a; }
        .exc-confirm { display: flex; align-items: center; gap: 6px; }
        .exc-confirm span { font-size: 12px; color: #b85a4a; }
        .exc-confirm-yes {
          background: #b85a4a; color: #fff; border: none; border-radius: 4px;
          padding: 4px 8px; cursor: pointer; display: flex; align-items: center;
        }
        .exc-confirm-no {
          background: none; border: 1px solid #ddd7ce; color: #9a8e82;
          border-radius: 4px; padding: 4px 8px; cursor: pointer; display: flex; align-items: center;
        }
        .exc-confirm-no:hover { color: #7a6245; border-color: #7a6245; }

        .exc-modal-overlay {
          position: fixed; inset: 0; background: rgba(30,25,20,0.4);
          display: flex; align-items: center; justify-content: center; z-index: 100; padding: 20px;
        }
        .exc-modal {
          background: #fff; border-radius: 8px; width: 100%; max-width: 560px;
          max-height: 88vh; display: flex; flex-direction: column; overflow: hidden;
        }
        .exc-modal-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: 18px 24px; border-bottom: 1px solid #ede8e1;
        }
        .exc-modal-header h2 { margin: 0; font-size: 16px; color: #1a1612; font-weight: 600; }
        .exc-modal-close { background: none; border: none; color: #9a8e82; cursor: pointer; display: flex; }
        .exc-modal-close:hover { color: #1a1612; }
        .exc-modal-body { padding: 20px 24px; overflow-y: auto; display: flex; flex-direction: column; gap: 16px; }
        .exc-field { display: flex; flex-direction: column; gap: 6px; }
        .exc-field label { font-size: 11px; letter-spacing: 0.1em; color: #9a8e82; text-transform: uppercase; }
        .exc-field input, .exc-field textarea {
          border: 1px solid #ddd7ce; border-radius: 4px; padding: 9px 12px;
          font-size: 13px; color: #1a1612; font-family: Arial, sans-serif; outline: none;
        }
        .exc-field input:focus, .exc-field textarea:focus { border-color: #7a6245; }
        .exc-field textarea { min-height: 70px; resize: vertical; }
        .exc-modal-footer {
          display: flex; justify-content: flex-end; gap: 10px;
          padding: 16px 24px; border-top: 1px solid #ede8e1;
        }
         @media (max-width: 900px) {
           .exc-topbar { align-items: flex-start; flex-direction: column; gap: 14px; }
           .exc-topbar-right { width: 100%; justify-content: space-between; }
           .exc-date-controls { flex-wrap: wrap; }
         }
         @media (max-width: 560px) {
           .exc-sidebar { width: 170px; }
           .exc-topbar, .exc-content { padding-left: 16px; padding-right: 16px; }
           .exc-topbar-left { align-items: flex-start; flex-direction: column; gap: 4px; }
           .exc-topbar-right { align-items: stretch; }
           .exc-date-controls { width: 100%; }
           .exc-date-picker { flex: 1; justify-content: space-between; }
           .exc-date-picker input { min-width: 0; width: 100%; }
           .exc-btn-add { padding-left: 12px; padding-right: 12px; }
         }
          @media (max-width: 767px) {
            .exc-root { display: block; }
            .exc-sidebar {
              width: 100%;
              min-height: auto;
              height: auto;
              position: relative;
              border-right: none;
              border-bottom: 1px solid #e2d9ce;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: space-between;
            }
            .exc-sidebar-brand { padding: 16px; border-bottom: none; }
            .exc-sidebar-footer { margin-top: 0; padding: 16px; border-top: none; }
             .exc-topbar {
               position: static;
               top: auto;
               z-index: auto;
               flex-shrink: 0;
               display: flex;
               flex-direction: column;
               align-items: stretch;
               gap: 16px;
               margin: 0;
               pointer-events: auto;
             }
             .exc-topbar-left {
               order: 2;
               width: 100%;
               align-items: flex-start;
               gap: 6px;
             }
            .exc-topbar-right {
               order: 1;
               display: grid;
               grid-template-columns: minmax(0, 1fr) minmax(0, 3fr);
               gap: 10px;
              width: 100%;
               position: static;
               top: auto;
               right: auto;
               bottom: auto;
               z-index: auto;
               margin: 0;
               align-items: stretch;
               justify-content: stretch;
               pointer-events: auto;
            }
            .exc-date-controls {
               display: grid;
               grid-template-columns: repeat(3, minmax(0, 1fr));
               gap: 8px;
               grid-column: 1 / -1;
              width: 100%;
               position: static;
               overflow: visible;
               pointer-events: auto;
               touch-action: manipulation;
            }
             .exc-date-shortcut {
               width: 100%;
               min-width: 0;
               min-height: 44px;
               position: static;
               pointer-events: auto;
               touch-action: manipulation;
               cursor: pointer;
             }
            .exc-date-picker {
               grid-column: 1 / -1;
               width: 100%;
              min-width: 0;
               min-height: 44px;
               justify-content: space-between;
               position: static;
               pointer-events: auto;
               touch-action: manipulation;
            }
             .exc-date-picker input {
               min-width: 0;
               width: 100%;
               min-height: 44px;
               padding: 0;
               pointer-events: auto;
               touch-action: manipulation;
             }
             .exc-filter-control { width: 100%; }
             .exc-filter-button {
               width: 100%;
               min-width: 0;
               min-height: 44px;
               padding: 10px;
             }
             .exc-filter-popover {
               top: calc(100% + 10px);
               right: 0;
               left: auto;
               width: min(320px, calc(100vw - 32px));
               max-height: min(70vh, 560px);
               overflow-y: auto;
             }
             .exc-filter-close,
             .exc-filter-radio,
             .exc-filter-field input,
             .exc-filter-submit {
               min-height: 44px;
             }
             .exc-filter-field input {
               font-size: 13px;
             }
             .exc-btn-ghost-sm {
               position: static;
               top: auto;
               right: auto;
               bottom: auto;
               z-index: auto;
               grid-column: 1;
               width: 100%;
               justify-content: center;
               pointer-events: auto;
               touch-action: manipulation;
             }
            .exc-btn-add {
               position: static;
               top: auto;
               right: auto;
               bottom: auto;
               z-index: auto;
               grid-column: 2;
               width: 100%;
              justify-content: center;
              min-width: 0;
               pointer-events: auto;
               touch-action: manipulation;
            }
             .exc-content {
               position: relative;
               z-index: 0;
               clear: both;
               margin: 0;
               padding-top: 24px;
             }
            .exc-table-wrap { display: none; }
            .exc-cards {
              display: flex;
               position: static;
               z-index: auto;
               clear: both;
               margin: 0;
              flex-direction: column;
              gap: 14px;
            }
            .exc-card {
              width: 100%;
              min-width: 0;
              background: #ffffff;
              border: 1px solid #e2d9ce;
              border-radius: 8px;
              padding: 16px;
              box-shadow: 0 3px 14px rgba(100,80,60,0.06);
            }
            .exc-card-header {
               flex-direction: column;
               gap: 8px;
              padding-bottom: 14px;
              border-bottom: 1px solid #ede8e1;
            }
            .exc-card-name {
              min-width: 0;
              margin: 0;
              color: #1a1612;
              font-size: 16px;
              line-height: 1.3;
              font-weight: 600;
              overflow-wrap: anywhere;
            }
            .exc-card-submitted {
              display: flex;
              flex-direction: column;
               align-items: flex-start;
              gap: 3px;
              color: #9a8e82;
              font-size: 10px;
              line-height: 1.3;
               text-align: left;
            }
            .exc-card-submitted span {
              color: #b0a498;
              font-size: 9px;
              letter-spacing: 0.12em;
              text-transform: uppercase;
            }
            .exc-card-submitted time { overflow-wrap: anywhere; }
            .exc-card-fields {
              display: grid;
              grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
              gap: 14px 12px;
              padding: 16px 0;
            }
            .exc-card-field {
              min-width: 0;
              display: flex;
              flex-direction: column;
              gap: 4px;
            }
            .exc-card-field-full { grid-column: 1 / -1; }
            .exc-card-label {
              color: #9a8e82;
              font-size: 9px;
              letter-spacing: 0.12em;
              line-height: 1.2;
              text-transform: uppercase;
            }
             .exc-card-status-field {
               flex-direction: row;
               align-items: center;
               flex-wrap: wrap;
               gap: 7px;
             }
             .exc-card-status-field .exc-card-label { margin: 0; }
             .exc-card-status-field .exc-badge {
               width: fit-content;
               flex: 0 0 auto;
               white-space: nowrap;
             }
            .exc-card-value {
              min-width: 0;
              color: #2a2218;
              font-size: 13px;
              line-height: 1.45;
              overflow-wrap: anywhere;
            }
            .exc-card-actions {
              padding-top: 14px;
              border-top: 1px solid #ede8e1;
            }
            .exc-card-actions .exc-actions {
              justify-content: flex-start;
              flex-wrap: wrap;
              gap: 8px;
            }
            .exc-card-actions .exc-action-btn,
            .exc-card-actions .exc-confirm-yes,
            .exc-card-actions .exc-confirm-no {
              min-height: 34px;
              align-items: center;
              gap: 6px;
              padding: 8px 11px;
              font-size: 11px;
            }
            .exc-card-actions .exc-confirm {
              flex-wrap: wrap;
              gap: 6px;
            }
             .exc-empty {
               min-height: 160px;
               padding: 36px 16px;
               text-align: center;
             }
             .exc-empty-desktop { display: none; }
             .exc-empty-mobile {
               display: block;
               margin: 0;
               color: #7a6d60;
               font-size: 14px;
             }
          }
      `}</style>
    </div>
  )
}
