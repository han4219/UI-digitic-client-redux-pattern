import React, { ElementType, useId, useRef, useState } from 'react'
import {
  arrow,
  FloatingArrow,
  FloatingPortal,
  offset,
  useFloating,
  useHover,
  useInteractions
} from '@floating-ui/react'
import { AnimatePresence, motion } from 'framer-motion'

type Props = {
  type: ElementType
  content: React.ReactNode
  children: React.ReactNode
  initialOpen: boolean
  className?: string
  offSetCrossAxis?: number
  offSetMainAxis?: number
}

const Popover: React.FC<Props> = ({
  type: Wrapper,
  content,
  children,
  initialOpen = false,
  offSetCrossAxis = 0,
  offSetMainAxis = 6,
  className
}) => {
  const id = useId()
  const arrowRef = useRef(null)
  const [isOpen, setIsOpen] = useState(initialOpen)

  const { refs, floatingStyles, context, x, y, middlewareData } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [
      arrow({ element: arrowRef }),
      offset({ crossAxis: offSetCrossAxis, mainAxis: offSetMainAxis })
    ]
  })
  const hover = useHover(context)
  const { getReferenceProps, getFloatingProps } = useInteractions([hover])

  return (
    <Wrapper
      ref={refs.setReference}
      className={className}
      onMouseOver={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      {...getReferenceProps()}
    >
      {children}
      <FloatingPortal id={id}>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              ref={refs.setFloating}
              style={{
                ...floatingStyles,
                top: y,
                left: x,
                transformOrigin: `${middlewareData?.arrow?.x || 0}px top`
              }}
              {...getFloatingProps()}
            >
              {content}
              <FloatingArrow context={context} ref={arrowRef} style={{ fill: '#FFFFFF' }} />
            </motion.div>
          )}
        </AnimatePresence>
      </FloatingPortal>
    </Wrapper>
  )
}

export default Popover
