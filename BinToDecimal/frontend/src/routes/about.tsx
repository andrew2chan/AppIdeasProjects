import { createFileRoute } from '@tanstack/react-router'

const About = () => {
  return (
    <div>Hello /about!</div>
  )
}

export const Route = createFileRoute('/about')({
  component: About
})