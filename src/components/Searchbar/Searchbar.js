import s from "./Searchbar.module.css";
import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    name: "",
  };

  onChangeInput = (e) => {
    this.state.name = e.currentTarget.value;
  };

  reset = () => {
    this.setState({ name: "" });
    document.querySelector('input').value=""
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.name.trim() === "") {
      alert('please write word')
    }
    this.props.onSubmit(this.state.name);
    this.reset();
  };

  render() {
    return (
      <>
        <header className={s.Searchbar}>
          <form className={s.SearchForm} onSubmit={this.onSubmit}>
            <button type="submit" className={s.button}>
              <span className={s.label}>Search</span>
            </button>

            <input
              className={s.input}
              type="text"
              //   autocomplete="off"
              //   autofocus
              placeholder="Search images and photos"
              onChange={this.onChangeInput}
            />
          </form>
        </header>
      </>
    );
  }
}

export default SearchBar;
