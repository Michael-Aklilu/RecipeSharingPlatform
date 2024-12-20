
const NumberCards = () => {
    return (
        <>
          <Card title='Users' value='999'/>
          <Card title='Recipes' value='34'/>
          <Card title='Admins'  value='2'/>
        </>
        
    )
}

const Card = ({title,value}) => {
    return (
        <div className="p-4 rounded bg-stone-300 col-span-4">
          <div className="flex mb-8 items-start justify-between">
            <div>
              <h3 className="text-stone-500 mb-2 text-sm">{title}</h3>
              <p className="text-3xl font-semibold">{value}</p>
            </div>
            
          </div>
       </div>
    )
   
}

export default NumberCards