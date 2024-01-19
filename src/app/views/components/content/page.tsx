import GetTheme from '@/app/theme';

const Content = () => {
  const { text_orange } = GetTheme();

  return (
    <div className={`${text_orange}`}>
      Landing Page
    </div>
  );
}

export default Content;