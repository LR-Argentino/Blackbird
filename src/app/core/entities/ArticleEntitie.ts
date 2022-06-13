export class ArticleEntitie {
  private platform: string;
  private title: string;
  private urlToImage: string;
  private url: string;
  private publishedAt: string;
  private content: string;

  constructor(platform: string, title: string, urlToImage: string,
              url: string, publishedAt: string, content: string) {
    this.platform = platform;
    this.title = title;
    this.urlToImage = urlToImage;
    this.url = url;
    this.publishedAt = publishedAt;
    this.content = content;
  }


  getPlatform(): string {
    return this.platform;
  }

  getTitle(): string {
    return this.title;
  }

  getUrlToImage(): string {
    return this.urlToImage;
  }

  getUrl(): string {
    return this.url;
  }

  getPublishedAt(): string {
    return this.publishedAt;
  }

  getContent(): string{
    return this.content;
  }

}
