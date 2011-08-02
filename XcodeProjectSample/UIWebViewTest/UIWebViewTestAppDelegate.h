//
//  UIWebViewTestAppDelegate.h
//  UIWebViewTest
//
//  Created by Tomasz Janeczko on 11-07-28.
//  Copyright 2011 __MyCompanyName__. All rights reserved.
//

#import <UIKit/UIKit.h>

@class UIWebViewTestViewController;

@interface UIWebViewTestAppDelegate : NSObject <UIApplicationDelegate> {

}

@property (nonatomic, retain) IBOutlet UIWindow *window;

@property (nonatomic, retain) IBOutlet UIWebViewTestViewController *viewController;

@end
