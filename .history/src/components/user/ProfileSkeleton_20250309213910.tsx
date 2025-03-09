import { HStack, Skeleton, SkeletonCircle, Stack } from "@chakra-ui/react"
export default function ProfileSkeleton() {
  return (
    <HStack gap="5">
      <SkeletonCircle size="24" />
      <Stack flex="1">
        <Skeleton height="5" />
        <Skeleton height="5" width="80%" />
      </Stack>
    </HStack>
  );
}

