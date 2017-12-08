import React from 'react';

import { store } from '../redux/store';
import text from '../translate';

import {
    ShareButtons,
    ShareCounts,
    generateShareIcon
} from 'react-share';


const {
    FacebookShareButton,
    GooglePlusShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    PinterestShareButton,
    VKShareButton,
    OKShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    RedditShareButton,
    EmailShareButton,
    TumblrShareButton,
    LivejournalShareButton,
    MailruShareButton,
  } = ShareButtons;
  
  const {
    FacebookShareCount,
    GooglePlusShareCount,
    LinkedinShareCount,
    PinterestShareCount,
    VKShareCount,
    OKShareCount,
    RedditShareCount,
    TumblrShareCount,
  } = ShareCounts;
  
  const FacebookIcon = generateShareIcon('facebook');
  const TwitterIcon = generateShareIcon('twitter');
  const GooglePlusIcon = generateShareIcon('google');
  const LinkedinIcon = generateShareIcon('linkedin');
  const PinterestIcon = generateShareIcon('pinterest');
  const VKIcon = generateShareIcon('vk');
  const OKIcon = generateShareIcon('ok');
  const TelegramIcon = generateShareIcon('telegram');
  const WhatsappIcon = generateShareIcon('whatsapp');
  const RedditIcon = generateShareIcon('reddit');
  const TumblrIcon = generateShareIcon('tumblr');
  const MailruIcon = generateShareIcon('mailru');
  const EmailIcon = generateShareIcon('email');
  const LivejournalIcon = generateShareIcon('livejournal');

class Home extends React.Component {
    render() {
        var lang = String(store.getState().lang.language);

        return (
            <div className='home content'>
                <h1> {text()[lang].GREETING}</h1>

                xxx
                <FacebookShareCount url='http://www.google.com' />

                <FacebookIcon size={32} round={true} />
                <WhatsappIcon size={32} round={false} />
                <WhatsappShareButton className='button' title='no title' url='http://www.google.com' >
                    <WhatsappIcon size={32} round={false} />
                </WhatsappShareButton>

                <FacebookShareButton quote='no title' url='http://www.google.com' >
                    <FacebookIcon size={32} round={true} />
                </FacebookShareButton>
            </div>
        )
    }
}

export default Home;