import Card from "./components/Card";

export default function App() {
  //Done: Create an array 'fruits'. It should contain at least 5 objects which all have the properties 'name', 'id', 'color'

  const fruits = [
    {
      id: 1337,
      name: '🍌 Banana',
      color: 'yellow',
    },
    {
      id: 1338,
      name: '🍊 Orange',
      color: 'orange',
    },
    {
      id: 1339,
      name: '🥑 Avocado',
      color: 'green',
    },
    {
      id: 1340,
      name: '🍒 Cherry',
      color: 'red',
    },
    {
      id: 1341,
      name: '🥝 Kiwi',
      color: 'green',
    },
    {
      id: 1342,
      name: '🥥 Cocos',
      color: 'white',
    }
  ];



  return (
    <div className="app">
      {fruits.map(({ id, name}) => (
      <Card key = {id} name= {name}/>
      ))}
    </div>
  );
}
