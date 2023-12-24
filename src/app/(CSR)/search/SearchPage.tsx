"use client";

import { UnsplashImage } from "@/models/unsplash.image";
import { FormEvent, useState } from "react";
import { Alert, Button, Form, Spinner } from "react-bootstrap";
import Image from "next/image";
import styles from "./SearchPage.module.css"

export default function SearchPage() {
  const [searchResults, setSearchResults] = useState<null | UnsplashImage[]>(
    null
  );
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchLoadingError, setSearchLoadingError] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const query = formData.get("query")?.toString().trim();

    if (query) {
      try {
        setSearchResults(null);
        setSearchLoadingError(false);
        setSearchLoading(true);
        const response = await fetch(`/api/search?query=${query}`);
        const images: UnsplashImage[] = await response.json();
        setSearchResults(images);
      } catch (error) {
        console.log(error);
        setSearchLoadingError(true);
      } finally {
        setSearchLoading(false);
      }
    }
  };

  return (
    <div>
      <Alert>
        This page fetches data <strong>client-side</strong>; In order to not protect API credentials, the request is sent to a NextJs <strong>route handler</strong> that runs on the server. This route handler then fetches the data from the Unsplash API and returns it to the client.
      </Alert>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="search-input">
          <Form.Label>Search Query</Form.Label>
          <Form.Control name="query" placeholder="E.g cats, hotdogs, ..." />
        </Form.Group>
        <Button type="submit" className="mb-3" disabled={searchLoading}>Search</Button>
      </Form>
      <div className="d-flex flex-column align-items-center">
        {searchLoading && <Spinner animation="border" />}
        {searchLoadingError && <p>Something went wrong...</p>}
        {searchResults?.length === 0 && (
          <p>Nothing found, try a different query</p>
        )}
      </div>
      {searchResults && (
        <>
          {searchResults.map((image) => (
            <Image
              src={image.urls.raw}
              width={250}
              height={250}
              alt={image.description}
              key={image.urls.raw}
              className={styles.image}
            />
          ))}
        </>
      )}
    </div>
  );
}
