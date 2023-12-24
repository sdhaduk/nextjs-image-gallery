import { Alert } from "react-bootstrap";

export default function Home() {
  return (
    <Alert>
      As someone who comes from React, <strong>I was not very familiar with SSR vs CSR</strong> and I wanted to understand it better. I created this image gallery page in order to help me do that. This page demonstrates all the ways in which pages can be rendered to the client browser. After coding up this small project, the differences between SSR and CSR have become <strong>wholistically</strong> clear to me, and I now understand their individual advantages and disadvantages. I also learned how to create <strong>dynamic routes</strong> with NextJs, since it is different from React due to the app router.
    </Alert>
  );
}
