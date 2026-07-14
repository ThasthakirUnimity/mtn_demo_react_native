import sanitizeHtml from 'sanitize-html'

export const refineNews = (news) => {
  news.description = sanitizeHtml(news.description, { allowedTags: [], disallowedTagsMode: 'escape' })
  news.content = sanitizeHtml(news.content, { allowedTags: [], disallowedTagsMode: 'escape' })

  return news
}
