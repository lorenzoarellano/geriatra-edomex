/**
 * Global modal state — uses Nuxt useState so it's reactive across all components.
 */
export const useModals = () => {
  const showPrivacy = useState<boolean>('modal-privacy', () => false)
  const showTerms = useState<boolean>('modal-terms', () => false)

  return {
    showPrivacy,
    showTerms,
    openPrivacy: () => { showPrivacy.value = true },
    openTerms: () => { showTerms.value = true },
    closePrivacy: () => { showPrivacy.value = false },
    closeTerms: () => { showTerms.value = false },
  }
}
