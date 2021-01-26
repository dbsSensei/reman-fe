// import React, { useState } from "react";
// import "./register.css";

// function Register() {
//   const [form, setForm] = useState({
//     fullname: "",
//     email: "",
//     password: "",
//     conrfim: "",
//   });

//   const onInputChange = (value, input) => {
//     setForm({
//       ...form,
//       [input]: value,
//     });
//     console.log(form.fullname);
//   };
//   return (
//     <div className="container">
//       {/* <div className="body"> */}
//       <h1 className="text registrasi">Registrasi</h1>
//       <p className="text paragraf">
//         Silahkan isi form dibawah untuk melakukan Registrasi!
//       </p>
//       <div className="formulir">
//         <form>
//           <input
//             type="text"
//             value={form.fullname}
//             onChange={(value) => onInputChange(value, "fullname")}
//             placeholder="Your Name"
//           />
//           <input
//             type="text"
//             value={form.email}
//             onChange={(value) => onInputChange(value, "email")}
//             placeholder="User Name"
//           />
//           <input
//             type="password"
//             value={form.password}
//             onChange={(value) => onInputChange(value, "password")}
//             placeholder="Password"
//           />
//           <input
//             type="password"
//             value={form.conrfim}
//             onChange={(value) => onInputChange(value, "conrf    im")}
//             placeholder="Confrim Password"
//           />
//         </form>
//       </div>
//       {/* </div> */}
//     </div>
//   );
// }

// export default Register;

import React, { Component } from "react";
import "./register.css";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      gender: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  firsthandler = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };
  lasthandler = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };
  emailhandler = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  passwordhandler = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  genderhandler = (event) => {
    this.setState({
      gender: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(
      `${this.state.firstName} ${this.state.lastName} Registered Successfully !!!!`,
    );
    console.log(this.state);
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      gender: "",
    });
    event.preventDefault();
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h1>User Registration</h1>
          <label>FirstName :</label>{" "}
          <input
            type="text"
            value={this.state.firstName}
            onChange={this.firsthandler}
            placeholder="FirstName..."
          />
          <br />
          <label>LastName :</label>{" "}
          <input
            type="text"
            value={this.state.lastName}
            onChange={this.lasthandler}
            placeholder="LastName..."
          />
          <br />
          <label>YourEmail :</label>{" "}
          <input
            type="text"
            value={this.state.email}
            onChange={this.emailhandler}
            placeholder="Email..."
          />
          <br />
          <label>Password :</label>{" "}
          <input
            type="password"
            value={this.state.password}
            onChange={this.passwordhandler}
            placeholder="Password..."
          />
          <br />
          <label>Gender : </label>
          <select onChange={this.genderhandler} defaultValue="Select Gender">
            <option defaultValue>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Form;
