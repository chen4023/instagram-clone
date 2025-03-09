import { HStack, Skeleton, SkeletonCircle, Stack } from "@chakra-ui/react"

export default function ProfileSkeleton() {
  return (
    <div className="w-full flex items-center justify-center mt-10">
      <HStack w="fit-content" align="center" justify="center" gap="5">
        <SkeletonCircle size="36" />
        <Stack w="200px" >
          <Skeleton height="5" width="80%" />
          <Skeleton height="5" width="80%" />
          <Skeleton height="5" width="80%" />
        </Stack>
      </HStack>
    </div >
  );
}

