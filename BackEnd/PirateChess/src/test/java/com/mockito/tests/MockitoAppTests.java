package com.mockito.tests;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.mockito.MockApplication;
import com.piratechess.user.*;
import com.piratechess.leaderboard.*;
/**
 * 
 * @author Jonathan Vetting
 *
 */
public class MockitoAppTests {
	@InjectMocks
	UserService usrService;
	
	@Mock
	IUserRepository repo;
	
	@Before
	public void init()
	{
		MockitoAnnotations.initMocks(this);
	}
	
	//@Test get
}
