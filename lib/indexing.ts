/**
 * Whether this build may be indexed by search engines.
 *
 * Netlify sets CONTEXT during builds: 'production', 'deploy-preview',
 * 'branch-deploy' or 'dev'. Only the two preview contexts opt out. Anything
 * else — including a missing variable — is indexable, so a misconfigured
 * environment can never de-index the live site.
 */
export function isIndexable(): boolean {
  const context = process.env.CONTEXT
  return context !== 'deploy-preview' && context !== 'branch-deploy'
}
