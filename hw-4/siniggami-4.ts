export class PaginationHelper {
  constructor(private collection: string[] | number[], private itemsPerPage: number) {}
  itemCount(): number {
    return this.collection.length;
  }
  pageCount(): number {
    return Math.ceil(this.collection.length / this.itemsPerPage);
  }
  pageItemCount(pageIndex: number): number {
    const pages = this.pageCount();

    if (pageIndex < 0 || pageIndex + 1 > pages) {
      return -1;
    }

    if (this.collection.length % this.itemsPerPage === 0 || pageIndex < pages - 1) {
      return this.itemsPerPage;
    }

    return this.collection.length - (this.itemsPerPage * (pages - 1));
  }
  pageIndex(itemIndex: number): number  {
    let count = 0;
    let pageNum = 0;
    for (let i = 0; i < this.collection.length; i++) {
      if (i === itemIndex) {
        return pageNum;
      }
      count++;
      if (count === this.itemsPerPage) {
        count = 0;
        pageNum++;
      }
    }
    return -1;
  }
}

