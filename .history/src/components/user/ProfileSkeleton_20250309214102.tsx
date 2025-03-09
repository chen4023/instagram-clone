import { HStack, Skeleton, SkeletonCircle, Stack } from "@chakra-ui/react"
export default function ProfileSkeleton() {
  return (
    <HStack gap="5" >
      <div className="flex items-center justify-center">
        <SkeletonCircle size="36" />
        <Stack flex="1">
          <Skeleton height="5" width="30%" />
          <Skeleton height="5" width="30%" />
          <Skeleton height="5" width="30%" />
        </Stack>
      </div>
    </HStack>
  );
}

