import { useState } from "react"
export default function CarForm() {
  const [hits, setHits] = useState([])
  
  const search = async (event) => {
    console.log("searching")
    const q = event.target.value;
    if (q.length > 2) {
      const params = new URLSearchParams({ q });

      const res = await fetch('/api/search?' + params);
      const result = await res.json();
      console.log(result)
      setHits(result['cars']); 
    }
  }
console.log(hits)
  return (
    <>
    <div>
      <input onChange={search} type="text" />
    </div>
      <ul>
        <li>hello</li>
        {hits.map((thing) => {
          return (
            <li>{thing.make}{thing.model}</li>
          )
        })}
      </ul>
</>
  )
} 