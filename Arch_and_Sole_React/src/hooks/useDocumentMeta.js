import { useEffect } from 'react';
export default function useDocumentMeta(title, description) {
  useEffect(() => {
    if (title) document.title = `${title} | Arch & Sole`;
    let tag = document.querySelector('meta[name="description"]');
    if (!tag) { tag = document.createElement('meta'); tag.name = 'description'; document.head.appendChild(tag); }
    if (description) tag.content = description;
  }, [title, description]);
}
