
import { HStack, Skeleton, SkeletonCircle, Stack } from "@chakra-ui/react"
export default function ProfileSkeleton() {
  return (
    <div className="w-full flex items-center justify-center mt-10">
      <HStack w="fit-content" align="center" justify="center">
        <SkeletonCircle size="36" />
        <Stack flex="1">
          <Skeleton height="5" width="30%" />
          <Skeleton height="5" width="30%" />
          <Skeleton height="5" width="30%" />
        </Stack>
      </HStack>
    </div>
  );
}

