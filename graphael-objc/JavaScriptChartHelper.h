//
//  JavaScriptChartHelper.h
//  UIWebViewTest
//
//  Created by Tomasz Janeczko on 11-07-29.
//  Copyright 2011 __MyCompanyName__. All rights reserved.
//

#import <Foundation/Foundation.h>


@interface JavaScriptChartHelper : NSObject {
    
}

+ (NSString*)getJSChartCodeWithArray:(NSArray*)dataArray andLegendArray:(NSArray*)legendArray;
+ (void)createPieChartInWebview:(UIWebView*)webView withData:(NSArray*)data andLegend:(NSArray*)legend ;

@end
