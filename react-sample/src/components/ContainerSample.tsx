const Container = (props: { title: string; children: React.ReactElement }) => {
  const { title, children } = props

  return (
    <div style={{ background: 'magenta' }}>
      <span>{title}</span>
      <div>{children}</div>
    </div>
  )
}

const Parent = () => {
  return (
    <Container title="Hello">
      <p>here background changed</p>
    </Container>
  )
}

export default Parent
