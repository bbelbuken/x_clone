import RepostedBy from './utils/repostedBy/RepostedBy';
import Content from './utils/content/Content';
import AccountIMG from './utils/accountimg/AccountIMG';
import { useAccounts } from 'hooks/useAccounts';

const Post = ({ post, postId }) => {
  const allAccounts = useAccounts();
  const account = allAccounts.find((account) => account.id === postId);
  const hasReposted = () => post.reactions.reposts.repost > 0;

  return (
    <div
      className="transition-colors-feed hover:shadow-feedbox border-b border-b-[#2f3336] hover:bg-[#ffffff08]"
      key={post.id}
    >
      <article className="flex shrink grow cursor-pointer flex-col px-4">
        {hasReposted() && <RepostedBy account={account} />}

        <div className={`flex ${hasReposted() ? 'mt-[1px]' : 'mt-[11px]'}`}>
          <AccountIMG account={account} />
          <Content
            account={account}
            postContent={post.content}
            postDate={post.date}
            postIMG={post.media.image}
            postVideo={post.media.video}
          />
        </div>
      </article>
    </div>
  );
};

export default Post;
