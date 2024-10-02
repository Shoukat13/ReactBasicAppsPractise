/*Javascript code*/
// const heading = document.createElement("h2");
//     heading.className = "header";
//     heading.textContent = "Hello Brother!!"
//     document.getElementById("root").append(heading)
//     console.log("Javascript Heading:", heading);
// /*React Code*/
// const reactHeading = React.createElement("h2",{className: "head", id: "reactHead", children: "Hello React!"});
// ReactDOM.createRoot(document.getElementById("root")).render(reactHeading);
let name = "Shoukat"
let age = 24;
let demo = undefined;
const headerr = <h2>JSX Expressions</h2>
const renderr = "Student"
const a =[1, 2, 3, 4, 5, 6, 9, 12];
const array = [{
    Name: "Ali",
    Rollno: 6,
    Marks: 98
},
{
    Name: "Hasnain",
    Rollno: 25,
    Marks: 95
},
{
    Name: "Afifa",
    Rollno:36,
    Marks: 99
}]
const cars =[{
    image: "/carimage.jpeg",
    Name: "BMW",
    Speed: '320km/h',
    Model: "C43",
    
},
{
    image: "/carimage.jpeg",
    Name: "RollsRoyce",
    Speed: '280km/h',
    Model: "Lux3"
},
{
    image: "/carimage.jpeg",
    Name: "Mercidies",
    Speed: '300km/h',
    Model: "BENZ"
},
{
    image: "/carimage.jpeg",
    Name: "Bentley",
    Speed: '340km/h',
    Model: "D3"
}
]
const Cars = () =>
    (
        <>
            <h1>Car Details Chart</h1>
            <table border ='1'>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Speed</th>
                        <th>Model</th>
                    </tr>
                </thead>
                <tbody>
                    {cars.map((car, index) => <tr key ={index}>
                            <td><img src = {car.image}/></td>
                            <td>{car.Name}</td>
                            <td>{car.Speed}</td>
                            <td>{car.Model}</td>
                        </tr>)}
                </tbody>
            </table>   
            
        </>
    )
const Student = () => 
    (
        <React.Fragment>
            <h1 className= "jsxHead">Student Details {age}</h1>
            <table border ='1'> 
                <thead>
                <tr>
                    <th>Name</th>
                    <th>RollNo</th>
                    <th>Marks</th>
                </tr>
                </thead>
                <tbody>
                    {array.map((tablecontent, index) => (<tr key = {index}>
                    <td>{tablecontent.Name}</td>
                    <td>{tablecontent.Rollno}</td>
                    <td>{tablecontent.Marks}</td>
                    </tr>))}
                </tbody>    
            </table>
            
            
        </React.Fragment>
    )
    function App(){
        if(renderr === 'Alooo')
        return <Student/>
        else
        return <Cars/>
    }
ReactDOM.createRoot(document.getElementById("root")).render(<App/>);