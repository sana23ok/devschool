class PaginationHelper {
    constructor(collection, itemsOnPage) {
        this.data = collection;
        this.pageSize = itemsOnPage;
    }

    itemCount() {
        return this.data.length;
    }

    pageCount() {
        return Math.ceil(this.itemCount() / this.pageSize);
    }

    pageItemCount(pageIndex) {
        if (pageIndex < this.pageCount() - 1 && pageIndex >= 0) {
            return this.pageSize;
        } else if (pageIndex === this.pageCount() - 1) {
            const result = this.itemCount() % this.pageSize;
            return result === 0 ? this.pageSize : result;
        }
        return -1;
    }

    pageIndex(itemIndex) {
        return (itemIndex > this.itemCount() - 1 || itemIndex < 0) ? -1 : Math.floor(itemIndex / this.pageSize);
    }
}

let helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
helper.pageCount(); // should == 2
helper.pageIndex(); // should == 6
helper.pageItemCount(0); // should == 4
helper.pageItemCount(1); // last page - should == 2
helper.pageItemCount(2); // should == -1 since the page is invalid

helper.pageIndex(5); // should == 1 (zero based index)
helper.pageIndex(2); // should == 0
helper.pageIndex(20); // should == -1
helper.pageIndex(-10); // should == -1