import { HStack, Skeleton, SkeletonCircle, Stack } from "@chakra-ui/react"
export default function ProfileSkeleton() {
  return (
    <HStack gap="5">
      <SkeletonCircle size="36" />
      <Stack flex="1">
        <Skeleton height="10" />
        <Skeleton height="10" width="30%" />
      </Stack>
    </HStack>
  );
}

