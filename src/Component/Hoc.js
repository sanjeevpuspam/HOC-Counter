const Hoc = (props) => {
  return (
    <section style={{ backgroundColor: props.bgColor  }}>{ props.cmp }</section>
  )
};
export default Hoc;