class Publication{
    constructor(title, publisher, type, price, copies, discount, tax){
       this.title = title;
       this.publisher = publisher;
       this.type = type;
       this.price = price;
       this.discount = discount;
       this.copies = copies;
       this.tax = tax;
              
    }
    
    toString(){
      const pubString ="Title: " + this.title + "\n" + 
                       "Publisher: " + this.publisher + "\n" + 
                       "Type: " + this.type + "\n" +
                       "Price: " + "€" + this.price.toFixed(2)+ "\n" +
                       "Discount: " + this.discount+"%" + "\n" +
                       "Copie: " + this.copies;
       
         return pubString;
    }
}