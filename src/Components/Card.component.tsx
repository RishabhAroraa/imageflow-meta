export default function Card(props: any) {
  return(
    <div className="border">
      {props.children}
    </div>
  )
}