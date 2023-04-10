//? Template for Index 

const React = require("react");
function Index(props) {
  const { data } = props;
  console.log(data);

  return (
    <div>
      <h1>About Page</h1>
      <ul>
        {data.map((ele, i) => {
          return (
            <li>
              <h3>Developer Name: {ele.name}</h3>
              <h3>Project Name: {ele.projectName}</h3>
              <h3>Skills: {ele.skills}</h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
module.exports = Index;
