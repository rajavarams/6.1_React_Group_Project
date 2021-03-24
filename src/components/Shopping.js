import React, {Component} from 'react';
import ShoppingItem from './ShoppingItem'
  class Shopping extends Component {
    constructor() {
      super();
      this.state = {
        ShoppingItems:[]
      }
    }
    addShoppingItem() {
      let ShoppingItems = this.state.ShoppingItems;
      ShoppingItems.push(
        {
          id: Date.now()
        }
      );
      this.setState(
        {
          ShoppingItems: this.state.ShoppingItems
        }
      );
    }
    // // passing in the id of the ShoppingItemcard from which the 'delete button' was clicked
  deleteShoppingItem(id){
    // // creating a new var that holds current ShoppingItems
    let newShoppingItemArr = this.state.ShoppingItems;
    // // mapping through array of all ShoppingItems that's saved in our state, passing in the current ShoppingItem along with the index of that current ShoppingItem
    newShoppingItemArr.map((ShoppingItem, index) => {
      // at ever ShoppingItem (from the array in our state) we check to see if the id passed in matches the id of the ShoppingItem we're currently on
      if (id === ShoppingItem.id) {
        // // if it matches we're removing just one item from that array
        newShoppingItemArr.splice(index,1);
      }
    });
    // // our array now has the same elements minus the one we just deleted
    // // update our state to show that new array which will trigger a re-render
    this.setState(
      {
        ShoppingItems: newShoppingItemArr
      }
    );
  }
    render() {
      return (
        <div style={{padding: '20px'}}>
          <div className="div-board" >
            <div className="row" >
                {
                this.state.ShoppingItems.map(item => {
                    return <ShoppingItem department={item.department} title={item.title}/>
                  })
              }
              <ShoppingItem
              itemImg = "https://ss7.vzw.com/is/image/VerizonWireless/jbl-charge-4inch-black-jblcharge4blkam-a?fmt=pjpg&hei=520" 
              department ="Electronics" 
              title="JBL Charge 4 Portable Bluetooth Speaker" 
              description = "Powerful, full–spectrum sound. Has a built–in power bank for your smartphones, tablets and other devices. Up to 20 hours of playtime"
              price = "$129.99"/>
              <ShoppingItem
              itemImg = "https://ak1.ostkcdn.com/images/products/is/images/direct/0c4af3c5dac3e199218c94ef497f8dae85f72910/52%22-Prominence-Home-Orbis-Modern-Indoor-Ceiling-Fan-with-Remote%2C-Matte-Black.jpg"
              department ="Home/Decor" 
              title="52'' Prominence Home Orbis LED Modern Ceiling Fan with Remote, Matte Black" 
              description = "A contemporary fan with a unique twist, the Prominence Home Orbis fits flawlessly in your modern indoor spaces. This 52-inch ceiling fan features a unique integrated LED ring light that is powerful, dimmable and dazzling."
              price = "$173.49"/>
              <ShoppingItem
              itemImg = "https://cdn.flightclub.com/1000/TEMPLATE/012597/1.jpg" 
              department ="Footwear" 
              title="AIR JORDAN 11 RETRO 'SPACE JAM' 2016" 
              description = "The 2016 reissue of the Air Jordan 11 Retro ‘Space Jam’ was successful enough that it surpassed all previous releases in Nike history to become the brand’s highest grossing sneaker to date. The retro launch, marking the 20th anniversary of the shoe’s namesake film, features a design that’s true to Michael Jordan’s original PE colorway, including the ‘45’ printed in white on the heel tab."
              price = "$270.00"/>
              <ShoppingItem
              itemImg = "https://i5.walmartimages.com/asr/83f533c3-3234-4bea-80bf-a0f9a43cd279_2.9b223f40bab27c513ba64f9f0e3fc2d9.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
              department ="Groceries" 
              title="Great Value Whole Milk, 1 Gallon, 128 Fl. Oz." 
              description = "This Grade A quality milk is pasteurized and delivers fresh from the farm taste. This kitchen staple is great for using in cereal, to bake desserts and more. This gallon of milk is also wonderful for milkshakes, smoothies, chocolate milk and more. "
              price = "$2.52"/>
              <ShoppingItem
              itemImg = "https://sep.yimg.com/ca/I/yhst-140356018263620_2639_3513681217.jpg"
              department ="Furniture" 
              title="Vanna Blue Grey Linen-Like Fabric Sectional with Ottoman by Poundex" 
              description = "Founded in 1989, Poundex consistently offers customers the finest quality furniture at the lowest possible prices. Discover the vast array of family decor solutions offered from exclusive brands including Bobkona Upholstery and Lizkona Outdoor collections."
              price = "$379.02"/>
              <ShoppingItem
              itemImg = "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/f9ead56071764da0a853a873013c6149_9366/Trefoil_Hoodie_Black_DT7964_01_laydown.jpg"
              department ="Apparel" 
              title="TREFOIL HOODIE" 
              description = "The Trefoil has been standing out since its 1972 debut. This hoodie celebrates its iconic style with a Trefoil logo front and center. A kangaroo pouch pocket keeps your everyday belongings close. The pullover sweatshirt is made of cotton French terry for a cozy feel."
              price = "$65.00"/>
            </div>
          </div>
          
        </div>
      );
    }
  }
  export default Shopping;