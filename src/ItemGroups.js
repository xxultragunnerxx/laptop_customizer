import React, {Component} from "react";
import Items from "./Items";
import slugify from "slugify";

class ItemGroups extends Component {
  render() {
    const options = this.props.options.map((item, index) => {
      const itemHash = slugify(JSON.stringify(item));
      return (
        <Items
          item={item}
          features={this.props.features}
          itemHash={itemHash}
          name={item.name}
          onChange={this.props.onChange}
          stateChanger={this.props.stateChanger}
          featureHashKey={this.props.featureHashKey}
          cost={item.cost}
          key={index}
          featureName={this.props.featureName}
        />
      );
    });
    return (
      <fieldset className='feature' key={this.props.featureName}>
        <legend className='feature__name'>
          <h3>{this.props.featureName}</h3>
        </legend>
        {options}
      </fieldset>
    );
  }
}

export default ItemGroups;
