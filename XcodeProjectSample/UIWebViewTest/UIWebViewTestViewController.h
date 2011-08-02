//
//  UIWebViewTestViewController.h
//  UIWebViewTest
//
//  Created by Tomasz Janeczko on 11-07-28.
//  Copyright 2011 __MyCompanyName__. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface UIWebViewTestViewController : UIViewController <UIWebViewDelegate> {
    UIWebView *_webView;
}

@property (nonatomic, retain) IBOutlet UIWebView *webView;

- (void) handleChartClick;

@end
