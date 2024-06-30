import PostsList from "@/_components/common/post/PostsList";
import LargeHeading from "@/_components/home/LargeHeading";
import HeroAdvertisement from "@/_components/home/advertisements/HeroAdvertisement";

export default function Home() {
  return (
    <div>
      <HeroAdvertisement />
      <LargeHeading />
      <PostsList />
    </div>
  );
}
