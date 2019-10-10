import React, {Component} from "react";
import ItemGroups from "./ItemGroups";

class List extends Component {
  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      return (
        <ItemGroups
          featureName={feature}
          features={this.props.features}
          onChange={this.props.onChange}
          stateChanger={this.props.stateChanger}
          options={this.props.features[feature]}
          featureHashKey={featureHash}
          key={idx}
        />
      );
    });
    return (
      <form className='main__form'>
        <h2>Customize your laptop</h2>
        {features}
      </form>
    );
  }
}

export default List;
