
"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { Icon } from "../Icon"

interface VideoModalProps {
    isOpen: boolean
    onClose: () => void
    videoId: string
}

export const VideoModal = ({ isOpen, onClose, videoId }: VideoModalProps) => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isOpen])

    if (!mounted || !isOpen) return null

    return createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

            <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-black shadow-2xl">
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70 focus:outline-none"
                    aria-label="Close modal"
                >
                    <Icon name="x" className="h-6 w-6 text-white" />
                </button>

                <div className="aspect-video w-full">
                    <iframe
                        className="h-full w-full"
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                        title="Introduction Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>,
        document.body
    )
}
