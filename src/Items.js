import React, {Component} from "react";
import slugify from "slugify";

const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

class Items extends Component {
  render() {
    return (
      <div key={this.props.featureHashkey} className='feature__item'>
        <input
          type='radio'
          id={this.props.itemHash}
          className='feature__option'
          name={slugify(this.props.name)}
          checked={this.props.name === this.props.stateChanger[this.props.name]}
          onChange={e =>
            this.props.onChange(this.props.featureName, this.props.item)
          }
        />
        <label htmlFor={this.props.itemHash} className='feature__label'>
          {this.props.name} ({USCurrencyFormat.format(this.props.cost)})
        </label>
      </div>
    );
  }
}

export default Items;
