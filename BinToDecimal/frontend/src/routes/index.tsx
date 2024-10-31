import { createFileRoute } from '@tanstack/react-router'
import Main from '../components/main/Main'

const Index = () => {
  return (
    <>
      <div>Hello!</div>
      <Main />
    </>
  );
}

export const Route = createFileRoute('/')({
  component: Index
})