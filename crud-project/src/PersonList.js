// GET REQUEST IN REACT USING AXIOS

import React from "react";

import axios from "axios";

export default class PersonList extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const persons = res.data;
      this.setState({ persons });
    });
  }

  render() {
    return (
      <ul>
        {this.state.persons.map((person) => (
          <li> {person.name} </li>
        ))}
      </ul>
    );
  }
}

//---------------------------------------------------------------------------------------------------------------//

// POST REQUEST IN REACT USING AXIOS

// import React from "react";
// import axios from "axios";

// export default class PersonList extends React.Component {
//   state = {
//     name: "",
//   };

//   handleChange = (event) => {
//     this.setState({ name: event.target.value });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();

//     const user = {
//       name: this.state.name,
//     };

//     axios
//       .post(`https://jsonplaceholder.typicode.com/users`, { user })
//       .then((res) => {
//         console.log(res);
//         console.log(res.data);
//       });
//   };

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Person Name:
//             <input type="text" name="name" onChange={this.handleChange} />
//           </label>
//           <button type="submit">Add</button>
//         </form>
//       </div>
//     );
//   }
// }

//---------------------------------------------------------------------------------------------------------------//

// DELETE REQUEST IN REACT USING AXIOS

// import React from "react";
// import API from "./api";

// export default class PersonList extends React.Component {
//   state = {
//     id: "",
//   };

//   handleChange = (event) => {
//     this.setState({ id: event.target.value });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();

//     API.delete(`users/${this.state.id}`).then((res) => {
//       console.log(res);
//       console.log(res.data);
//     });
//   };

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Person ID:
//             <input type="text" name="id" onChange={this.handleChange} />
//           </label>
//           <button type="submit">Delete</button>
//         </form>
//       </div>
//     );
//   }
// }

//---------------------------------------------------------------------------------------------------------------//

// PUT REQUEST IN REACT USING AXIOS

// import React from "react";
// import axios from "axios";

// export default class PersonList extends React.Component {
//   state = {
//     name: "",
//   };

//   handleChange = (event) => {
//     this.setState({ name: event.target.value });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();

//     const user = {
//       name: this.state.name,
//     };

//     axios
//       .put(`https://jsonplaceholder.typicode.com/users/1`, { user })
//       .then((res) => {
//         console.log(res);
//         console.log(res.data);
//       });
//   };

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Person Name:
//             <input type="text" name="name" onChange={this.handleChange} />
//           </label>
//           <button type="submit">Add</button>
//         </form>
//       </div>
//     );
//   }
// }
