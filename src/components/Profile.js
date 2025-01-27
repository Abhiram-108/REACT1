export default Profile = ({ data, setdata }) => {
  const handlechange = ({ e, item }) => {
    setdata((prevState) => ({
      ...prevState,
      [item]: e.target.value,
    }));
  };

  const { name, email, age } = data;
  return (
    <div>
      <div>
        <label>Name : </label>
        <input
          type="text"
          value={name}
          onChange={(e) => handlechange(e, "name")}
        />
      </div>
      <div>
        <label>Age : </label>
        <input
          type="number"
          value={age}
          onChange={(e) => handlechange(e, "name")}
        />
      </div>
      <div>
        <label>email : </label>
        <input
          type="text"
          value={email}
          onChange={(e) => handlechange(e, "name")}
        />
      </div>
    </div>
  );
};
