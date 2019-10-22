package com.piratechess.news;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.view.feed.AbstractRssFeedView;

public class CustomRssViewer extends AbstractRssFeedView {

//	@Override
//	protected void buildFeedMetadata(Map<String, Object> model, Channel feed,
//		HttpServletRequest request) {
//		
//		feed.setTitle("Mkyong Dot Com");
//		feed.setDescription("Java Tutorials and Examples");
//		feed.setLink("http://www.mkyong.com");
//		
//		super.buildFeedMetadata(model, feed, request);
//	}
	
	
	@Override
	protected List<com.rometools.rome.feed.rss.Item> buildFeedItems(Map<String, Object> model,
		HttpServletRequest request, HttpServletResponse response)
		throws Exception {
//		
//		@SuppressWarnings("unchecked")
//		List<RSSObject> listContent = (List<RSSObject>) model.get("feedContent");
//		List<RSSObject> items = new ArrayList<RSSObject>(listContent.size());
//		
//		for(RSSObject tempContent : listContent ){
//		
//			Item item = new Item();
//			
//			Content content = new Content();
//			content.setValue(tempContent.getSummary());
//			item.setContent(content);
//			
//			item.setTitle(tempContent.getTitle());
//			item.setLink(tempContent.getUrl());
//			item.setPubDate(tempContent.getCreatedDate());
//			
//			items.add(item);
//		}
//		
//		return items;
			return null;
}

}