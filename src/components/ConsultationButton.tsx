import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface ConsultationButtonProps {
  children?: ReactNode
  className?: string
}

export default function ConsultationButton({ children, className = '' }: ConsultationButtonProps) {
  return (
    <Link to="/contact" className={`consultation-button ${className}`.trim()}>
      {children ?? (
        <>
          Book Free Consultation <ArrowRight size={13} strokeWidth={1.5} />
        </>
      )}
    </Link>
  )
}