import React from "react";
import axios from "axios";
import styles from "./Home.module.css";
import imageHeader from "../../images/head-covid.png";
import Typography from "@material-ui/core/Typography";
import PickCountry from "../../Components/PickCountry/PickCountry";
import Cards from "../../Components/Cards/Cards";

class Home extends React.Component {
  state = {
    name: "",
    data: {},
  };

  componentDidMount() {
    this.getdata();
    console.log("Component did mount is running");
  }

  getdata = (country) => {
    let setUrl = "https://covid19.mathdro.id/api";
    setUrl = country ? `${setUrl}/countries/${country}` : setUrl;
    axios
      .get(setUrl)
      .then((response) => {
        this.setState({
          data: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleCountryChange = (event) => {
    let country = event.target.value;
    this.getdata(country);
    const setCountry = country ? country : "Global";
    this.props.history.push({
      search: "?country=" + setCountry,
    });
  };

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({
      name: event.target.value,
    });
  };

  render() {
    const { data } = this.state;
    const lastUpdate = new Date(data.lastUpdate).toDateString();
    console.log(lastUpdate);
    return (
      <div className={styles.container}>
        <img className={styles.image} src={imageHeader} alt="" />
        <Typography variant="subtitle2" color="textSecondary" gutterBottom>
          Last Updated: {lastUpdate}
        </Typography>
        <PickCountry handleCountryChange={this.handleCountryChange} />
        <Cards data={data} />
      </div>
    );
  }
}

export default Home;
