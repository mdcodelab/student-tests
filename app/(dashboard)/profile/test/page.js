import Test from "../../../../components/Test";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

function TestPage() {
  const queryClient = new QueryClient();
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Test></Test>
    </HydrationBoundary>
  );
}

export default TestPage;
