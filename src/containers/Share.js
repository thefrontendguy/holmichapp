import React, { Component } from 'react';

import {
    ShareButtons,
    ShareCounts,
    generateShareIcon
} from 'react-share';

import { store } from '../redux/store';
import text from '../translate';

const {
    FacebookShareButton,
    GooglePlusShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    PinterestShareButton,
    VKShareButton,
    OKShareButton,
    RedditShareButton,
    TumblrShareButton,
    LivejournalShareButton,
    EmailShareButton,
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

export default class Share extends Component {
    render() {
        const FacebookIcon = generateShareIcon('facebook');
        const TwitterIcon = generateShareIcon('twitter');
        const TelegramIcon = generateShareIcon('telegram');
        const WhatsappIcon = generateShareIcon('whatsapp');
        const GooglePlusIcon = generateShareIcon('google');
        const LinkedinIcon = generateShareIcon('linkedin');
        const PinterestIcon = generateShareIcon('pinterest');
        const VKIcon = generateShareIcon('vk');
        const OKIcon = generateShareIcon('ok');
        const RedditIcon = generateShareIcon('reddit');
        const TumblrIcon = generateShareIcon('tumblr');
        const LivejournalIcon = generateShareIcon('livejournal');
        const MailruIcon = generateShareIcon('mailru');
        const EmailIcon = generateShareIcon('email');

        const shareUrl = 'http://www.localhost:3000/route'

        console.log(this.props)
        const origin = this.props.origin;
        const destination = this.props.destination;
        var lang = String(store.getState().lang.language);
        const title = text(origin, destination)[lang].ASK_SOCIAL_TITLE;
        const titleEmail = text(origin, destination)[lang].APPNAME;
        const message = text(origin, destination)[lang].ASK_SOCIAL_MESSAGE;
        const isIconRound = false;
        return (
            <div className='share-buttons'>
                <div className='title'>{title}</div>
                <div className='button'>
                    <WhatsappShareButton title={message} url={shareUrl} >
                        <WhatsappIcon size={32} round={isIconRound} />
                    </WhatsappShareButton>
                </div>
                <div className='button'>
                    <FacebookShareButton quote={message} url={shareUrl} >
                        <FacebookIcon size={32} round={isIconRound} />
                    </FacebookShareButton>
                </div>
                <div className='button'>
                    <LinkedinShareButton title={message} url={shareUrl} >
                        <LinkedinIcon size={32} round={isIconRound} />
                    </LinkedinShareButton>
                </div>
                <div className='button'>
                    <TwitterShareButton title={message} url={shareUrl} >
                        <TwitterIcon size={32} round={isIconRound} />
                    </TwitterShareButton>
                </div>
                <div className='button'>
                    <EmailShareButton title={titleEmail} body={message} url={shareUrl} >
                        <EmailIcon size={32} round={isIconRound} />
                    </EmailShareButton>
                </div>
            </div>
        )
    }
}

/*     <FacebookShareCount url={shareUrl} />
<FacebookShareCount url={shareUrl}>
{shareCount => (
    <span className="myShareCountWrapper">{shareCount}</span>
)}
</FacebookShareCount> */