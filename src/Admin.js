import React from 'react';
import {Modal} from 'react-bootstrap';

class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: false
        }
    }

    alert() {
        var password = "please";
        var x = prompt("Enter in the password "," ");
        if (x.toLowerCase() == password) {
          alert("Come right in \n \n You've entered in the right password");
          this.setState({password: true})
        }
        else {
            this.setState({password: false})
        }
    }

    componentDidMount() {
        alert();
    }

    render() {
        return (
            <div>
                {
                    this.state.password &&
                    <div>
                        Admin Page
                    </div>
                }
            </div>
        )
    }
}

export default Admin;


//<script type="text/javascript">
// var password = "please";
// var x = prompt("Enter in the password "," ");
// if (x.toLowerCase() == password) {
//   alert("Come right in \n \n You've entered in the right password");
//   window.location = "good.htm";
// }
// else {
//   window.location = "bad.htm";
// }
//</script>

//https://www.computerhope.com/javascript/password.htm