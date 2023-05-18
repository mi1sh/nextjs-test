"use client";

export default function ErrorWrapper({ error }: { error: Error }) {
  return <h1>Whoops! {error.message}</h1>;
}
