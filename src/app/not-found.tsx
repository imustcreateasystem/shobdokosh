import { Queue, Stack } from "@/ui/components/Container";
import NotFoundContent from "@/ui/not-found/NotFoundContent";

export default function NotFound() {
  return (
    <Queue className="min-h-screen">
      <Stack
        fullWidth
        itemsCenter
        className="max-w-screen-lg px-7 mx-auto h-[100vh]"
      >
        <NotFoundContent />
      </Stack>
    </Queue>
  );
}
