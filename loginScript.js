const performLogin = () => {
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    console.log(username);
    console.log(password);

    login(username, password)
        .then( _ => {
            alert('Logged In!');
            document.dispatchEvent(new CustomEvent('login_event'));
        } )
        .catch( e => {
            alert('Error!');
            console.log(JSON.stringify(e));
        } );

    return false;
}